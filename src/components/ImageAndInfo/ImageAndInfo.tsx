import SvgIcon from '../SvgIcon/SvgIcon';
import {
  Container,
  Description,
  TextContent,
  Title,
} from './ImageAndInfo.styles';
import { ImageAndInfoProps } from './ImageAndInfo.types';

function ImageAndInfo(props: ImageAndInfoProps): JSX.Element {
  const { image, title, description } = props;
  return (
    <Container>
      <SvgIcon src={image} />
      <TextContent>
        <Title>{title}</Title>
        <Description>{description}</Description>
      </TextContent>
    </Container>
  );
}

export default ImageAndInfo;
