// @flow

import Agreement from '../../modules/Agreement';
import Input from '../../modules/Input';
// import { Instructions, InstructionsItem } from '../../modules/Instructions';
import Text from '../../modules/Text';
import RichText from '../../modules/RichText';
import Checkbox from '../../modules/Checkbox';
import Collapsable from '../../modules/Collapsable';
import ClipboardText from '../../modules/ClipboardText';
import Dropdown from '../../modules/Dropdown';
import Image from '../../modules/Image';
import ImageTiles from '../../modules/ImageTiles';
import { Select, Multiselect } from '../../modules/Select';
import Submit from '../../modules/Submit';
import Video from '../../modules/Video';
import { TagVideo, MultipleTagVideo } from '../../modules/TagVideo';
import Progress from '../../modules/Progress';

import { RegionSelect, RegionMultiselect } from '../../modules/RegionSelect';

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
  Input,
  Text,
  RichText,
  Checkbox,
  Submit,
  ClipboardText,
  Collapsable,
  Dropdown,
  Image,
  ImageTiles,
  // Instructions,
  // InstructionsItem,
  Progress,
  RegionSelect,
  RegionMultiselect,
  Select,
  Multiselect,
  Video,
  TagVideo,
  MultipleTagVideo,
];

export default moduleControls;
