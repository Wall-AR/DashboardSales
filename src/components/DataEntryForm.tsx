// src/components/DataEntryForm.tsx

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { v4 as uuidv4 } from 'uuid'; // Biblioteca UUID

interface FormData {
    value: number;
}

interface DataEntryFormProps {
    setData: React.Dispatch<React.SetStateAction<{ id: string; value: number }[]>>;
}

const DataEntryForm: React.FC<DataEntryFormProps> = ({ setData }) => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm<FormData>();
    const [message, setMessage] = useState('');

    const onSubmit = (data: FormData) => {
        setData(prevData => [...prevData, { id: uuidv4(), value: data.value }]);
        setMessage('Valor adicionado com sucesso!');
        reset(); // Reseta o formulário após a submissão
        setTimeout(() => setMessage(''), 3000); // Remove a mensagem após 3 segundos
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} style={{ marginBottom: '20px' }}>
            <input
                {...register('value', {
                    required: 'O valor é obrigatório',
                    min: { value: 1, message: 'O valor deve ser maior que 0' },
                    max: { value: 50000, message: 'O valor não deve exceder 50.000' },
                })}
                placeholder="Valor"
                type="number"
                style={{ padding: '10px', marginRight: '10px' }}
            />
            {errors.value && <p style={{ color: 'red' }}>{errors.value.message}</p>}
            <button type="submit">Adicionar</button>
            <button type="button" onClick={() => reset()} style={{ marginLeft: '10px' }}>Resetar</button>
            {message && <p style={{ color: 'green' }}>{message}</p>} {/* Mensagem de sucesso */}
        </form>
    );
};

export default DataEntryForm;