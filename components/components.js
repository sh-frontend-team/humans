// Core
import Icon from './icon'
import LoadingIcon from './loading-icon'
import Scroller from './scroller'
import Btn from './button'
import Card from './card'
import Code from './code'
import Popup from './popup'

// Form
import Form from './form/form'
import Label from './label/label'
import Input from './input/input'
import Datetime from './datetime/datetime'
import Textarea from './textarea/textarea'
import Select from './select/select'
import CheckItem from './check/check-item'
import CheckIcon from './check/check-icon'
import RadioItem from './radio/radio-item'
import RadioIcon from './radio/radio-icon'
import Switch from './switch/switch'
import Counter from './counter/counter'
import Helper from './helper/helper'
import HelperItem from './helper/helper-item'

// Layout
import Container from './container'
import Section from './section'
import Column from './column'
import Row from './row'

// More components
import Letter from './letter'
import Article from './article'
import Image from './image'
import Tag from './tag'
import Rate from './rate'
import Collapse from './collapse'
import NavBar from './nav-bar'
import TabBar from './tab-bar'
import SearchBar from './search-bar'
import FilterBar from './filter-bar'
import SlideBar from './slide-bar'

export default {
  // Core
  ...Icon,
  ...LoadingIcon,
  ...Scroller,
  ...Btn,
  ...Card,
  ...Code,
  ...Popup,

  // Form
  Form,
  Label,
  Input,
  Datetime,
  Textarea,
  Select,
  CheckItem,
  CheckIcon,
  RadioItem,
  RadioIcon,
  Switch,
  Counter,
  Helper,
  HelperItem,

  // Layout
  ...Container,
  ...Section,
  ...Column,
  ...Row,

  // More components
  ...Letter,
  ...Article,
  ...Image,
  ...Tag,
  ...Rate,
  ...Collapse,
  ...NavBar,
  ...TabBar,
  ...SearchBar,
  ...FilterBar,
  ...SlideBar
}
