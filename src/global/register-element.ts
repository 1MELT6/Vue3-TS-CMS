import { App } from 'vue'
import 'element-plus/lib/theme-chalk/base.css'
import {
  ElAside,
  ElButton,
  ElCheckbox,
  ElContainer,
  ElForm,
  ElFormItem,
  ElHeader,
  ElInput,
  ElLink,
  ElMain,
  ElRadio,
  ElTabPane,
  ElTabs,
  ElMenu,
  ElMenuItem,
  ElMenuItemGroup,
  ElSubmenu,
  ElRadioButton,
  ElRadioGroup,
  ElIcon,
  ElDropdown,
  ElDropdownItem,
  ElDropdownMenu,
  ElOption,
  ElRow,
  ElSelect,
  ElCol,
  ElDatePicker
} from 'element-plus'

const components = [
  ElButton,
  ElForm,
  ElFormItem,
  ElInput,
  ElRadio,
  ElTabs,
  ElTabPane,
  ElCheckbox,
  ElLink,
  ElContainer,
  ElAside,
  ElMain,
  ElHeader,
  ElMenu,
  ElMenuItem,
  ElMenuItemGroup,
  ElSubmenu,
  ElRadioButton,
  ElRadioGroup,
  Location,
  ElIcon,
  ElDropdown,
  ElDropdownItem,
  ElDropdownMenu,
  ElForm,
  ElFormItem,
  ElHeader,
  ElInput,
  ElLink,
  ElMain,
  ElMenu,
  ElMenuItem,
  ElMenuItemGroup,
  ElOption,
  ElRadio,
  ElRow,
  ElCol,
  ElSelect,
  ElDatePicker,
  ElSubmenu,
  ElTabPane,
  ElTabs
  // Document
]

export default function (app: App): void {
  for (const component of components) {
    app.component(component.name, component)
  }
}
