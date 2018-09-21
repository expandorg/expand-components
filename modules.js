// @flow

import Agreement from './src/modules/Agreement';

import Alignment from './src/modules/Alignment';

import Article from './src/modules/Article';

import Checkbox from './src/modules/Checkbox';
import Collapsable from './src/modules/Collapsable';
import ClipboardText from './src/modules/ClipboardText';

import Description from './src/modules/Description';

import {
  Form,
  formProps,
  formValidationRules,
  FormContext,
  FormDataProvider,
  FormData,
  moduleControls,
  getModuleControlsMap,
  calculateVerificationScore,
} from './src/modules/Form';

import applyVariables from './src/modules/Form/variables/applyVariables';
import makeVariables from './src/modules/Form/variables/makeVariables';

import Image from './src/modules/Image';
import ImageTiles from './src/modules/ImageTiles';

import Input from './src/modules/Input';

import { Instructions, InstructionsItem } from './src/modules/Instructions';

import Label from './src/modules/Label';
import Modal from './src/modules/Modal';

import { Module, moduleProps } from './src/modules/Module';

import Paragraph from './src/modules/Paragraph';

import Progress from './src/modules/Progress';

import { RegionSelect, RegionMultiselect } from './src/modules/RegionSelect';
import { ReportForm, ReportToggle } from './src/modules/Report';

import {
  Select,
  Choice,
  SelectModule,
  MultiSelectModule,
} from './src/modules/Select';

import Submit from './src/modules/Submit';

import Title from './src/modules/Title';

import Question from './src/modules/Question';

import Validation from './src/modules/Validation';

import Video from './src/modules/Video';

import { MediaTooltip } from './src/modules/Tooltip';

export {
  Agreement,
  Alignment,
  applyVariables,
  Article,
  calculateVerificationScore,
  Checkbox,
  Choice,
  ClipboardText,
  Collapsable,
  Description,
  Form,
  FormContext,
  FormData,
  FormDataProvider,
  formProps,
  formValidationRules,
  getModuleControlsMap,
  Image,
  ImageTiles,
  Input,
  Instructions,
  InstructionsItem,
  Label,
  makeVariables,
  MediaTooltip,
  Modal,
  Module,
  moduleControls,
  moduleProps,
  MultiSelectModule,
  Paragraph,
  Progress,
  Question,
  RegionMultiselect,
  RegionSelect,
  ReportForm,
  ReportToggle,
  Select,
  SelectModule,
  Submit,
  Title,
  Validation,
  Video,
};
