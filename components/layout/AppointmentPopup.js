"use client"
import Link from "next/link"
import Image from "next/image"
import React, { useState } from 'react'
import dayjs from 'dayjs'
import { useTranslation } from 'react-i18next';
import { Form, Input, DatePicker, TimePicker, Button, Row, Col, message, Modal } from 'antd'
import { RightOutlined } from '@ant-design/icons'
import 'antd/dist/reset.css'

export default function AppointmentPopup({ isPopup, handlePopup }) {
    const { t } = useTranslation('common');
    const [form] = Form.useForm()
    const [loading, setLoading] = useState(false)
    const [selectedDate, setSelectedDate] = useState(null)

    const onFinish = async (values) => {
        // values.appointmentDate is a Dayjs/moment object; convert to ISO date string
        const payload = {
            firstName: values.firstName,
            lastName: values.lastName,
            email: values.email,
            phoneNumber: values.phoneNumber,
            appointmentDate: values.appointmentDate ? values.appointmentDate.format('YYYY-MM-DD') : '',
            appointmentTime: values.appointmentTime ? values.appointmentTime.format('HH:mm') : '',
            message: values.message || '',
        }

        setLoading(true)
        const hide = message.loading(t('appointment.submitting'), 0)
        try {
            const res = await fetch('/api/submit-appointment', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload),
            })

            if (!res.ok) {
                const data = await res.json().catch(() => ({}))
                throw new Error(data.message || 'Submission failed')
            }

            // prepare texts before closing/unmounting
            const successTitle = 'Success'
            const successContent = t('appointment.success')

            hide();
            form.resetFields()
            // close the popup (call parent handler)
            if (typeof handlePopup === 'function') handlePopup()

            // show a modal confirmation
            Modal.success({
                title: successTitle,
                content: successContent,
            })
        } catch (err) {
            hide();
            console.error('Submission failed:', err)
            message.error(t('appointment.error'))
        } finally {
            setLoading(false)
        }
    }

    return (
        <div
            id="appointment-popup"
            className={`search-popup custom-appointment-popup ${isPopup ? "popup-visible" : ""}`}
            style={{
                backgroundColor: "rgba(0, 0, 0, 0.5)",
                overflowY: 'auto',
            }}
            onClick={handlePopup}
        >
            <div
                className="my-form-container"
                id="appointment-popup-container"
                style={{
                    overflowY: 'auto',
                    maxHeight: 'calc(100vh - 80px)',
                    WebkitOverflowScrolling: 'touch',
                    width: '100%',
                    boxSizing: 'border-box',
                }}
                onClick={(e) => e.stopPropagation()}
            >
                <div className="top-box mb_20" style={{ width: '100%' }}>
                    <figure className="logo-box pull-left"><Link href="/"><Image src="/assets/images/logo.png" alt="Mon Parcourt" width={120} height={34} /></Link></figure>
                    <div className="close-search pull-right" onClick={handlePopup} style={{ cursor: 'pointer' }}>
                        <span className="fa fa-times"></span>
                    </div>
                </div>

                <div className="my-form-header">
                    <h2>{t('appointment.make')}</h2>
                    <p>{t('appointment.emailPrivacy')}</p>
                </div>

                <Form form={form} layout="vertical" onFinish={onFinish} className="my-contact-form">
                    <Row gutter={16} className="my-form-row">
                        <Col span={12}>
                            <Form.Item name="firstName" rules={[{ required: true, message: t('appointment.firstNameRequired') || 'First name is required' }]}>
                                <Input placeholder={t('appointment.firstName')} />
                            </Form.Item>
                        </Col>
                        <Col span={12}>
                            <Form.Item name="lastName" rules={[{ required: true, message: t('appointment.lastNameRequired') || 'Last name is required' }]}>
                                <Input placeholder={t('appointment.lastName')} />
                            </Form.Item>
                        </Col>
                    </Row>

                    <Form.Item name="email" rules={[{ required: true, type: 'email', message: t('appointment.validEmail') || 'Please enter a valid email' }]}>
                        <Input placeholder={t('appointment.email')} />
                    </Form.Item>

                    <Form.Item name="phoneNumber" rules={[{ required: true, pattern: /^\+?[0-9\s-]{7,}$/, message: t('appointment.validPhone') || 'Please enter a valid phone number' }]}>
                        <Input placeholder={t('appointment.phone')} />
                    </Form.Item>

                    <Row gutter={16}>
                        <Col span={12}>
                                <Form.Item
                                    name="appointmentDate"
                                    label={t('appointment.selectDate')}
                                    rules={[{ required: true, message: t('appointment.dateRequired') || 'Please select a date' }]}
                                >
                                    <DatePicker
                                        style={{ width: '100%' }}
                                        format="YYYY-MM-DD"
                                        allowClear
                                        inputReadOnly={false}
                                        allowInput
                                        // disable selecting past dates (yesterday and earlier)
                                        // and disable today if current time is after 18:00
                                        disabledDate={(current) => {
                                            if (!current) return false
                                            const now = dayjs()
                                            const after18 = now.hour() > 18 || (now.hour() === 18 && now.minute() > 0)
                                            if (current.isBefore(now.startOf('day'), 'day')) return true
                                            if (current.isSame(now, 'day') && after18) return true
                                            return false
                                        }}
                                        onChange={(date) => {
                                            setSelectedDate(date)
                                            // Clear the time when date changes to force re-evaluation
                                            form.setFieldValue('appointmentTime', null)
                                        }}
                                        getPopupContainer={() => document.getElementById('appointment-popup-container') || document.body}
                                        placeholder={t('appointment.selectDate')}
                                    />
                                </Form.Item>
                        </Col>
                        <Col span={12}>
                                <Form.Item
                                    name="appointmentTime"
                                    label={t('appointment.selectTime')}
                                    rules={[{ required: true, message: t('appointment.timeRequired') || 'Please select a time' }]}
                                >
                                    <TimePicker
                                        key={selectedDate ? selectedDate.format('YYYY-MM-DD') : 'no-date'}
                                        style={{ width: '100%' }}
                                        format="HH:mm"
                                        allowClear
                                        inputReadOnly={false}
                                        allowInput
                                        // restrict hours to business hours: 09:00 - 18:00
                                        disabledTime={() => ({
                                            disabledHours: () => {
                                                const disabled = []
                                                for (let i = 0; i < 24; i++) {
                                                    if (i < 9 || i > 18) disabled.push(i)
                                                }
                                                // if selected date is today, also disable hours earlier than now
                                                if (selectedDate && selectedDate.isSame(dayjs(), 'day')) {
                                                    const currentHour = dayjs().hour()
                                                    for (let h = 9; h < currentHour; h++) {
                                                        if (!disabled.includes(h)) disabled.push(h)
                                                    }
                                                }
                                                return disabled.sort((a, b) => a - b)
                                            },
                                            disabledMinutes: (hour) => {
                                                // allow only 18:00 (no minutes > 0 for hour 18)
                                                if (hour === 18) return Array.from({ length: 59 }, (_, i) => i + 1)

                                                // if selected date is today and hour is current hour, disable minutes earlier than now
                                                if (selectedDate && selectedDate.isSame(dayjs(), 'day')) {
                                                    const currentHour = dayjs().hour()
                                                    const currentMinute = dayjs().minute()
                                                    if (hour === currentHour) {
                                                        return Array.from({ length: currentMinute }, (_, i) => i)
                                                    }
                                                }

                                                return []
                                            }
                                        })}
                                        // hide disabled options so the picker only displays allowed hours/minutes
                                        hideDisabledOptions={true}
                                        getPopupContainer={() => document.getElementById('appointment-popup-container') || document.body}
                                        placeholder={t('appointment.selectTime')}
                                    />
                                </Form.Item>
                        </Col>
                    </Row>

                    <Form.Item name="message" rules={[{ max: 500, message: t('appointment.messageTooLong') || 'Message is too long' }]}>
                        <Input.TextArea rows={3} placeholder={t('appointment.placeholderMessage')} />
                    </Form.Item>

                    <Form.Item>
                        <Button
                            type="primary"
                            htmlType="submit"
                            loading={loading}
                            className="my-submit-button"
                            size="large"
                            shape="round"
                            icon={<RightOutlined />}
                            style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}
                        >
                            {loading ? t('appointment.submitting') : t('appointment.submit')}
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </div>
    )
}
