// @flow
import Agreement from '../../modules/Agreement';
import Audio from '../../modules/Audio';
import Checkbox from '../../modules/Checkbox';
import ClipboardText from '../../modules/ClipboardText';
import Collapsable from '../../modules/Collapsable';
import Dropdown from '../../modules/Dropdown';
import FlexContainer from '../../modules/FlexContainer';
import Image from '../../modules/Image';
import ImageTiles from '../../modules/ImageTiles';
import Input from '../../modules/Input';
import Instructions from '../../modules/Instructions';
import Progress from '../../modules/Progress';
import RichText from '../../modules/RichText';
import { RegionSelect, RegionMultiselect } from '../../modules/RegionSelect';
import { Select, Multiselect } from '../../modules/Select';
import Submit from '../../modules/Submit';
import Padding from '../../modules/Padding';
import Text from '../../modules/Text';
import YesNo from '../../modules/YesNo';
import { UploadFile } from '../../modules/UploadFile';
import { TagVideo, MultipleTagVideo } from '../../modules/TagVideo';
import Video from '../../modules/Video';
import Section from '../../modules/Section';
import Slider from '../../modules/Slider';
import Wizard from '../../modules/Wizard';
import Verify from '../../modules/Verify';

const moduleControls = [
  Agreement,
  Audio,
  Checkbox,
  ClipboardText,
  Collapsable,
  Dropdown,
  FlexContainer,
  Image,
  ImageTiles,
  Input,
  Instructions,
  MultipleTagVideo,
  Multiselect,
  Progress,
  RegionMultiselect,
  RegionSelect,
  RichText,
  Padding,
  Select,
  Submit,
  TagVideo,
  Text,
  UploadFile,
  YesNo,
  Video,
  Section,
  Slider,
  Verify,
  Wizard,
];

export default moduleControls;
