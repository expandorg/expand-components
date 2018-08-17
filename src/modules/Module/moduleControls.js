// @flow

import ModuleType from './ModuleType';

import Input from '../Input';
import { Instructions } from '../Instructions';
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
  [ModuleType.agreement]: Agreement,
};

export default moduleControls;
