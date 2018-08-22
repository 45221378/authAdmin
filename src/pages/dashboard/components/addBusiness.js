import React, { Component } from "react"
//import PropTypes from 'prop-types'
import styles from "./addBusiness.less"
import { Button, Modal,Form,Input,Select } from "antd"
const FormItem = Form.Item
const TextArea = Input.TextArea
const Option = Select.Option

class BusinessForm extends Component {
  constructor (props) {
    super(props)
    this.state = {
      visible: false,
    }
  }

  showModal = () => {
    this.setState({
      visible: true,
    })
  };

  handleOk = e => {
    this.handleSubmit(e)
  };

  handleCancel = () => {
    this.setState({
      visible: false,
    })
  };

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values)
        this.handleCancel()
      }
    })
  };

  handleChange = (value)=>{
    console.log(`selected ${value}`)
  }

  render () {
    const { getFieldDecorator } = this.props.form
    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 4 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 20 },
      },
    }

    return <div>
        <Button type="primary" icon="plus" size={"large"} className={styles.business} onClick={this.showModal}>
          添加业务
        </Button>
        <Modal title="" centered visible={this.state.visible} onOk={this.handleOk} onCancel={this.handleCancel} cancelText="取消" okText="确定" closable={false} maskStyle={{background:'rgba(0,0,0,.7)'}}>
          <Form onSubmit={this.handleSubmit}>
            <FormItem {...formItemLayout} label="业务名称">
              {getFieldDecorator("name", {
                rules: [
                  {
                    type: "string",
                    message: "业务名称输入有误",
                  },
                  {
                    required: true,
                    message: "请输入业务名称",
                  },
                ],
              })(<Input placeholder="请输入业务名称" />)}
            </FormItem>
            <FormItem {...formItemLayout} label="认证模板">
              {getFieldDecorator("type", {
                initialValue:-1,
                rules: [
                  {
                    type: "number",
                  },
                  {
                    required: true,
                  },
                ],
              })(<Select onChange={this.handleChange}>
                  <Option value={-1}>新增</Option>
                  <Option value={0}>数码分期</Option>
                  <Option value={1}>教育分期</Option>
                  <Option value={2}>周转王</Option>
                  <Option value={3}>天联对接</Option>
                </Select>)}
            </FormItem>
            <FormItem {...formItemLayout} label="描述">
              {getFieldDecorator("describe", {
                rules: [
                  {
                    type: "string",
                    message: "描述输入有误",
                  },
                ],
              })(<TextArea placeholder="请输入描述(可选)" />)}
            </FormItem>
          </Form>
        </Modal>
      </div>
  }
}

const AddBusiness = Form.create()(BusinessForm)
export default AddBusiness
