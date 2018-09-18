// @flow

import ModuleType from './ModuleType';

import Input from '../Input';
import { Instructions, InstructionsItem } from '../Instructions';
import Submit from '../Submit';
import Article from '../Article';
import Title from '../Title';
import Paragraph from '../Paragraph';
import { SelectModule, MultiSelectModule } from '../Select';
import Checkbox from '../Checkbox';
import Video from '../Video';
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
      if (Array.isArray(Control.module.name)) {
        Control.module.name.forEach(name => {
          map[name] = Control; // eslint-disable-line no-param-reassign
        });
      } else {
        map[Control.module.name] = Control; // eslint-disable-line no-param-reassign
      }
    }
    return map;
  }, {});

const moduleControls = {
  [ModuleType.text]: Input,
  [ModuleType.number]: Input,
  [ModuleType.email]: Input,
  [ModuleType.password]: Input,
  [ModuleType.title]: Title,
  [ModuleType.article]: Article,
  [ModuleType.paragraph]: Paragraph,
  [ModuleType.select]: SelectModule,
  [ModuleType.multiselect]: MultiSelectModule,
  [ModuleType.checkbox]: Checkbox,
  [ModuleType.submit]: Submit,
  [ModuleType.video]: Video,
  [ModuleType.image]: Image,
  [ModuleType.description]: Description,
  [ModuleType.question]: Question,
  [ModuleType.instructions]: Instructions,
  [ModuleType.instructionsItem]: InstructionsItem,
  [ModuleType.agreement]: Agreement,
  [ModuleType.collapsable]: Collapsable,
  [ModuleType.progress]: Progress,
  [ModuleType.dropdown]: Dropdown,
  [ModuleType.regionSelect]: RegionSelect,
  [ModuleType.regionMultiselect]: RegionMultiselect,
  [ModuleType.imageTiles]: ImageTiles,
};

export default moduleControls;
