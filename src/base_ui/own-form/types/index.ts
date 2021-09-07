/*
 * @Description:
 * @Author: zgq
 * @Date: 2021-09-06 21:46:55
 * @LastEditors: zgq
 * @LastEditTime: 2021-09-07 21:50:41
 */

type TFormType =
  | 'input'
  | 'password'
  | 'inputNumber'
  | 'select'
  | 'datePicker'
  | 'checkbox'
  | 'radio'
  | 'switch'
  | 'timePicker'

export enum formItemEnum {
  INPUT = 'input',
  PASSWORD = 'password',
  INPUT_NUMBER = 'inputNumber',
  SELECT = 'select',
  DATE_PICKER = 'datePicker',
  CHECKBOX = 'checkbox',
  RADIO = 'radio',
  SWITCH = 'switch',
  TIME_PICKER = 'timePicker'
}

interface option {
  label: string
  value: string | number
}

export interface IFormItem {
  type: TFormType
  label: string
  value?: string
  options?: option[]
  checked?: boolean
  rules?: any[]
  placeHolder?: string
}
