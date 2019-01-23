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

// import { SelectModule, MultiSelectModule } from '../../modules/Select';
// import Video from '../../modules/Video';
// import { TagVideo, MultipleTagVideo } from '../../modules/TagVideo';
// import Image from '../../modules/Image';
// import Agreement from '../../modules/Agreement';
// import Progress from '../../modules/Progress';
// import ImageTiles from '../../modules/ImageTiles';

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
  // SelectModule,
  // MultiSelectModule,
  // Video,
  // Image,
  // Instructions,
  // InstructionsItem,
  // Agreement,
  // Progress,
  RegionSelect,
  RegionMultiselect,
  // ImageTiles,
  // TagVideo,
  // MultipleTagVideo,
];

export default moduleControls;
