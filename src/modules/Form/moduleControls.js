// @flow

import Input from '../Input';
import { Instructions, InstructionsItem } from '../Instructions';
import Submit from '../Submit';
import Article from '../Article';
import Title from '../Title';
import Paragraph from '../Paragraph';
import { SelectModule, MultiSelectModule } from '../Select';
import Checkbox from '../Checkbox';
import Video from '../Video';
import TagVideo from '../TagVideo';
import Image from '../Image';
import Description from '../Description';
import Question from '../Question';
import Agreement from '../Agreement';
import Collapsable from '../Collapsable';
import Progress from '../Progress';
import Dropdown from '../Dropdown';
import ImageTiles from '../ImageTiles';

import { RegionSelect, RegionMultiselect } from '../RegionSelect';

export const getModuleControlsMap = (controls: Array<Object>) =>
  controls.reduce((map, Control) => {
    if (Control.module) {
      if (Array.isArray(Control.module.type)) {
        Control.module.type.forEach(type => {
          map[type] = Control; // eslint-disable-line no-param-reassign
        });
      } else {
        map[Control.module.type] = Control; // eslint-disable-line no-param-reassign
      }
    }
    return map;
  }, {});

const moduleControls = [
  Input,
  Title,
  Article,
  Paragraph,
  SelectModule,
  MultiSelectModule,
  Checkbox,
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
];

export default moduleControls;
