
import { Dialog } from '@headlessui/react'
import React, { useEffect, useState } from 'react';
import TextField from '../../lib/components/text-field';
import { useGeolocated } from "react-geolocated";
import { BookDto } from '../../lib/types';

function AddBookPopup({ isOpen, onSuccess, onClose }: any) {

    const { coords } =
        useGeolocated({
            positionOptions: {
                enableHighAccuracy: false,
            },
            userDecisionTimeout: 5000,
        });

    const [formValue, setFormValue] = useState<BookDto>({
        title: '',
        author: '',
        isbn: '',
        latitude: 38.957132 + Math.random() / 100,
        longitude: -77.036546 + Math.random() / 100,
        city: '',
        country: '',
        additional: '',
        contacts: '',
        year: 2022
    })

    const handleAdd = () => {
        onSuccess(formValue);
        setFormValue({
            title: '',
            author: '',
            isbn: '',
            latitude: 38.957132 + Math.random() / 100,
            longitude: -77.036546 + Math.random() / 100,
            city: '',
            country: '',
            additional: '',
            contacts: '',
            year: 2022
        })
        onClose()
    }

    useEffect(() => {
        setFormValue(prev => ({ ...prev, latitude: coords ? coords.latitude : 31.02 + Math.random() / 100, longitude: coords ? coords.longitude : 72 + Math.random() / 100 }))
    }, [coords?.latitude, coords?.longitude, coords])

    return (
        <Dialog open={isOpen} onClose={onClose} className="p-4 absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] z-[1000] border rounded-lg bg-gray-100 shadow-xl">
            <Dialog.Panel>
                <Dialog.Title>Дадаць кнігу</Dialog.Title>
                <div className="flex flex-col gap-y-4 my-10 mx-5">
                    <label htmlFor="book-title" className="flex items-center justify-between">Назва
                        <TextField value={formValue.title} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFormValue(prev => ({ ...prev, title: e.target.value }))} id="book-title" />
                    </label>
                    <label htmlFor="book-author" className="flex items-center gap-x-4">Аўтар
                        <TextField value={formValue.author} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFormValue(prev => ({ ...prev, author: e.target.value }))} id="book-author" />
                    </label>
                    <label htmlFor="book-year" className="flex items-center justify-between">Год
                        <TextField type="number" value={formValue.year} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFormValue(prev => ({ ...prev, year: Number(e.target.value) }))} id="book-year" />
                    </label>
                    <label htmlFor="book-isbn" className="flex items-center justify-between">ISBN
                        <TextField value={formValue.isbn} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFormValue(prev => ({ ...prev, isbn: e.target.value }))} id="book-isbn" />
                    </label>
                    <label htmlFor="book-country" className="flex items-center justify-between">Краiна
                        <TextField value={formValue.country} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFormValue(prev => ({ ...prev, country: e.target.value }))} id="book-country" />
                    </label>
                    <label htmlFor="book-city" className="flex items-center justify-between">Горад
                        <TextField value={formValue.city} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFormValue(prev => ({ ...prev, city: e.target.value }))} id="book-city" />
                    </label>
                    <label htmlFor="book-contacts" className="flex items-center justify-between">Contacts
                        <TextField value={formValue.contacts} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFormValue(prev => ({ ...prev, contacts: e.target.value }))} id="book-contacts" />
                    </label>
                </div>
                <div className="flex justify-around">
                    <button onClick={handleAdd} className="border border-black p-2 rounded-lg bg-white">Дадаць</button>
                    <button onClick={onClose} className="border border-black p-2 rounded-lg bg-white">Скасаваць</button>
                </div>
            </Dialog.Panel>
        </Dialog>
    )
}

export default AddBookPopup