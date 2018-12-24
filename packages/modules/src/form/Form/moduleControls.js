// @flow

import Input from '../../modules/Input';
import { Instructions, InstructionsItem } from '../../modules/Instructions';
import Submit from '../../modules/Submit';
import Article from '../../modules/Article';
import Title from '../../modules/Title';
import Paragraph from '../../modules/Paragraph';
import { SelectModule, MultiSelectModule } from '../../modules/Select';
import Checkbox from '../../modules/Checkbox';
import ClipboardText from '../../modules/ClipboardText';
import Video from '../../modules/Video';
import { TagVideo, MultipleTagVideo } from '../../modules/TagVideo';
import Image from '../../modules/Image';
import Description from '../../modules/Description';
import Question from '../../modules/Question';
import Agreement from '../../modules/Agreement';
import Collapsable from '../../modules/Collapsable';
import Progress from '../../modules/Progress';
import Dropdown from '../../modules/Dropdown';
import ImageTiles from '../../modules/ImageTiles';

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
  Title,
  Article,
  Paragraph,
  SelectModule,
  MultiSelectModule,
  Checkbox,
  ClipboardText,
  Submit,
  Video,
  Image,
  Description,
  Question,
  Instructions,
  InstructionsItem,
  Agreement,
  Collapsable,
  Progress,
  Dropdown,
  RegionSelect,
  RegionMultiselect,
  ImageTiles,
  TagVideo,
  MultipleTagVideo,
];

export default moduleControls;
