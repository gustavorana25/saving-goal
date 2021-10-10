import { fireEvent } from '@testing-library/react';
import { renderHook } from '@testing-library/react-hooks';
import useKeyBind from '../useKeyBind';

describe('useKeyBind', () => {
  it('should call onKeyPress only when the key bind is active', () => {
    const spy = jest.fn();
    const { result } = renderHook(() => useKeyBind({ onKeyPress: spy }));

    fireEvent.keyDown(window, { key: 'A', code: 'KeyA' });
    expect(spy).not.toBeCalled();

    result.current.handleKeyBindActivation(true);
    fireEvent.keyDown(window, { key: 'A', code: 'KeyA' });

    expect(spy).toBeCalledWith('A');
    expect(spy.mock.calls.length).toBe(1);

    result.current.handleKeyBindActivation(false);

    fireEvent.keyDown(window, { key: 'A', code: 'KeyA' });
    expect(spy.mock.calls.length).toBe(1);
  });

  it('should call onHorizontalArrowPress only after activation', () => {
    const spy = jest.fn();
    const { result } = renderHook(() =>
      useKeyBind({ onHorizontalArrowPress: spy })
    );

    fireEvent.keyDown(window, { key: 'ArrowRight', code: 'ArrowRight' });
    expect(spy).not.toBeCalled();

    result.current.handleKeyBindActivation(true);
    fireEvent.keyDown(window, { key: 'ArrowRight', code: 'ArrowRight' });

    expect(spy).toBeCalledWith(1);
    expect(spy.mock.calls.length).toBe(1);

    result.current.handleKeyBindActivation(false);

    fireEvent.keyDown(window, { key: 'ArrowRight', code: 'ArrowRight' });
    expect(spy.mock.calls.length).toBe(1);
  });

  it('should call onHorizontalArrowPress when press left and right', () => {
    const spy = jest.fn();
    const { result } = renderHook(() =>
      useKeyBind({ onHorizontalArrowPress: spy })
    );

    result.current.handleKeyBindActivation(true);

    fireEvent.keyDown(window, { key: 'ArrowRight', code: 'ArrowRight' });
    expect(spy.mock.calls.length).toBe(1);
    expect(spy.mock.calls[0][0]).toBe(1);

    fireEvent.keyDown(window, { key: 'ArrowLeft', code: 'ArrowLeft' });
    expect(spy.mock.calls.length).toBe(2);
    expect(spy.mock.calls[1][0]).toBe(-1);
  });

  it('unmount should disable key bind', () => {
    const spy = jest.fn();
    const { result, unmount } = renderHook(() =>
      useKeyBind({ onKeyPress: spy })
    );

    result.current.handleKeyBindActivation(true);
    fireEvent.keyDown(window, { key: 'y', code: 'KeyY' });

    expect(spy).toBeCalledWith('y');
    expect(spy.mock.calls.length).toBe(1);

    unmount();
    fireEvent.keyDown(window, { key: 'y', code: 'KeyY' });
    expect(spy.mock.calls.length).toBe(1);
  });
});
