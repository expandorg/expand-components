// @flow

import Agreement from './src/modules/Agreement';

import Alignment from './src/components/Alignment';

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
  FormData,
  FormDataProvider,
  moduleControls,
  getModuleControlsMap,
  calculateVerificationScore,
  applyVariables,
  getVariablesMap,
  PropControlType,
} from './src/form/Form';

import Image from './src/modules/Image';
import ImageTiles from './src/modules/ImageTiles';

import Input from './src/modules/Input';

import { Instructions, InstructionsItem } from './src/modules/Instructions';

import Label from './src/components/Label';
import Modal from './src/components/Modal';

import { Module, moduleProps } from './src/form/Module';

import Paragraph from './src/modules/Paragraph';

import Progress from './src/modules/Progress';

import { RegionSelect, RegionMultiselect } from './src/modules/RegionSelect';
import { ReportForm, ReportToggle } from './src/form/Report';

import {
  Select,
  Choice,
  SelectModule,
  MultiSelectModule,
} from './src/modules/Select';

import Submit from './src/modules/Submit';

import Title from './src/modules/Title';
import { TagVideo, MultipleTagVideo } from './src/modules/TagVideo';

import Question from './src/modules/Question';

import Validation from './src/form/Validation';

import Video from './src/modules/Video';

import { MediaTooltip } from './src/components/Tooltip';

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
  PropControlType,
  Image,
  ImageTiles,
  Input,
  Instructions,
  InstructionsItem,
  Label,
  getVariablesMap,
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
  TagVideo,
  MultipleTagVideo,
  Validation,
  Video,
};
