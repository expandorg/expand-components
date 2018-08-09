// @flow

import Input from '../Input';
import Submit from '../Submit';
import Article from '../Article';
import Title from '../Title';
import Paragraph from '../Paragraph';
import { SelectField } from '../Select';
import Checkbox from '../Checkbox';
import Video from '../Video';
import Image from '../Image';

import FieldType from './fieldType';

const fieldControls = {
  [FieldType.text]: Input,
  [FieldType.number]: Input,
  [FieldType.email]: Input,
  [FieldType.password]: Input,
  [FieldType.title]: Title,
  [FieldType.article]: Article,
  [FieldType.paragraph]: Paragraph,
  [FieldType.select]: SelectField,
  [FieldType.checkbox]: Checkbox,
  [FieldType.submit]: Submit,
  [FieldType.video]: Video,
  [FieldType.image]: Image,
};

export default fieldControls;
