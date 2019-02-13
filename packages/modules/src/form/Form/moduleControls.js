// @flow
import Agreement from '../../modules/Agreement';
import Audio from '../../modules/Audio';
import Checkbox from '../../modules/Checkbox';
import ClipboardText from '../../modules/ClipboardText';
import Collapsable from '../../modules/Collapsable';
import Conditional from '../../modules/Conditional';
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
import Text from '../../modules/Text';
import YesNo from '../../modules/YesNo';
// import { UploadFile } from '../../modules/UploadFile';
import { TagVideo, MultipleTagVideo } from '../../modules/TagVideo';
import Video from '../../modules/Video';

export const getModuleControlsMap = (
  controls: Array<Object>
): ModuleControlsMap =>
  controls.reduce(
    (map, Control) => ({
      ...map,
      [Control.module.type]: Control,
    }),
    {}
  );

export const groupModulesByCategory = (controls: Array<Object>) => {
  const grouped = controls.reduce((map, Control) => {
    if (Control.module.editor && Control.module.editor.category) {
      let category = map[Control.module.editor.category];
      if (!category) {
        map[Control.module.editor.category] = [];
        category = map[Control.module.editor.category];
      }
      category.push(Control);
    }
    return map;
  }, {});
  return grouped;
};

const moduleControls = [
  Agreement,
  Audio,
  Checkbox,
  ClipboardText,
  Collapsable,
  Conditional,
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
  Select,
  Submit,
  TagVideo,
  Text,
  // UploadFile,
  YesNo,
  Video,
];

export default moduleControls;
