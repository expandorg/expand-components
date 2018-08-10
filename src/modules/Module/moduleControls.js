// @flow

import Input from '../Input';
import Submit from '../Submit';
import Article from '../Article';
import Title from '../Title';
import Paragraph from '../Paragraph';
import { SelectModule } from '../Select';
import Checkbox from '../Checkbox';
import Video from '../Video';
import Image from '../Image';
import Description from '../Description';

import ModuleType from './ModuleType';

const moduleControls = {
  [ModuleType.text]: Input,
  [ModuleType.number]: Input,
  [ModuleType.email]: Input,
  [ModuleType.password]: Input,
  [ModuleType.title]: Title,
  [ModuleType.article]: Article,
  [ModuleType.paragraph]: Paragraph,
  [ModuleType.select]: SelectModule,
  [ModuleType.checkbox]: Checkbox,
  [ModuleType.submit]: Submit,
  [ModuleType.video]: Video,
  [ModuleType.image]: Image,
  [ModuleType.description]: Description,
};

export default moduleControls;
