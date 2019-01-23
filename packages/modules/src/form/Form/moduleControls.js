// @flow

import Input from '../../modules/Input';
// import { Instructions, InstructionsItem } from '../../modules/Instructions';
import Submit from '../../modules/Submit';
import Text from '../../modules/Text';
import RichText from '../../modules/RichText';
import Checkbox from '../../modules/Checkbox';
import Collapsable from '../../modules/Collapsable';
import ClipboardText from '../../modules/ClipboardText';
import Dropdown from '../../modules/Dropdown';
import Image from '../../modules/Image';
import ImageTiles from '../../modules/ImageTiles';
import Video from '../../modules/Video';

// import { SelectModule, MultiSelectModule } from '../../modules/Select';
// import { TagVideo, MultipleTagVideo } from '../../modules/TagVideo';
// import Agreement from '../../modules/Agreement';
// import Progress from '../../modules/Progress';

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
  // SelectModule,
  // MultiSelectModule,
  // Instructions,
  // InstructionsItem,
  // Agreement,
  // Progress,
  RegionSelect,
  RegionMultiselect,
  // TagVideo,
  Video,
  // MultipleTagVideo,
];

export default moduleControls;
