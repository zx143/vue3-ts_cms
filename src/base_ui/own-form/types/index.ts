/*
 * @Description:
 * @Author: zgq
 * @Date: 2021-09-06 21:46:55
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-10-13 06:53:27
 */

type TFormType =
  | 'input'
  | 'password'
  | 'inputNumber'
  | 'select'
  | 'datepicker'
  | 'checkbox'
  | 'radio'
  | 'switch'
  | 'timePicker'

export enum formItemEnum {
  INPUT = 'input',
  PASSWORD = 'password',
  INPUT_NUMBER = 'inputNumber',
  SELECT = 'select',
  DATEPICKER = 'datepicker',
  CHECKBOX = 'checkbox',
  RADIO = 'radio',
  SWITCH = 'switch',
  TIME_PICKER = 'timePicker'
}

interface option {
  label: string
  value: string | number
}

interface anyObj<T = any> {
  [key: string]: T
}

export interface IFormItem {
  field: string
  type: TFormType
  label: string
  value?: string
  options?: option[]
  checked?: boolean
  rules?: any[]
  placeHolder?: string
  otherOptions?: anyObj
}

export interface IForm {
  formItems: IFormItem[]
  colLayout?: anyObj<number>
  itemStyle?: anyObj<string>
  labelWidth: string
}
