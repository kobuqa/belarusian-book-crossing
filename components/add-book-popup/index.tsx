
import React, { useRef } from 'react';
import { useGeolocated } from "react-geolocated";
import { BookDto } from '../../lib/types';
import { Modal, Form, Input, Button } from 'antd';
import { randomIntFromInterval } from '../../lib/utils';

const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
};

function AddBookPopup({ isOpen, onSuccess, onClose }: any) {
    const submitRef = useRef<HTMLButtonElement>(null)

    const [form] = Form.useForm<BookDto>();

    const { coords } =
        useGeolocated({
            positionOptions: {
                enableHighAccuracy: false,
            },
            userDecisionTimeout: 5000,
        });

    const handleAddBook = (values: BookDto) => {
        onSuccess({ ...values, latitude: (coords?.latitude || 53) + randomIntFromInterval(-1, 1), longitude: (coords?.longitude || 31) + randomIntFromInterval(-1, 1) })
        onClose()
    }

    const handleSubmit = () => submitRef.current?.click()

    return (
        <Modal
            title="Дадаць кнігу"
            open={isOpen}
            onOk={handleSubmit}
            onCancel={onClose}
            okText="Дадаць"
            cancelText="Скасаваць"
        >
            <Form {...layout} form={form} onFinish={handleAddBook}>
                <Form.Item name="title" label="Назва" rules={[{ required: true, pattern: new RegExp(/^[a-zA-Zа-яА-Я]+$/ig), message: "Пожалуйста, введите корректное название книги" }]}>
                    <Input />
                </Form.Item>
                <Form.Item name="author" label="Аўтар" rules={[{ required: true, pattern: new RegExp(/^[a-zA-Zа-яА-Я]+$/ig), message: "Пожалуйста, введите корректное имя автора" }]}>
                    <Input />
                </Form.Item>
                <Form.Item name="year" label="Год" rules={[{ required: true, pattern: new RegExp(/^\d+$/ig), message: "Пожалуйста, введите корректный год" }]}>
                    <Input />
                </Form.Item>
                <Form.Item name="isbn" label="ISBN" rules={[{ required: false }]}>
                    <Input />
                </Form.Item>
                <Form.Item name="country" label="Краiна" rules={[{ required: false }]}>
                    <Input />
                </Form.Item>
                <Form.Item name="city" label="Горад" rules={[{ required: false }]}>
                    <Input />
                </Form.Item>
                <Form.Item name="contacts" label="Кантакты" rules={[{ required: true, message: "Пожалуйста, укажите как с Вами связаться" }]}>
                    <Input />
                </Form.Item>
                <Form.Item>
                    <Button htmlType="submit" className="invisible" ref={submitRef}>Submit</Button>
                </Form.Item>

            </Form>
        </Modal >

    )
}

export default AddBookPopup