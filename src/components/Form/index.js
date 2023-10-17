import './Form.css';
import TextInput from '../TextInput';
import DropdownList from '../DropdownList';
import Button from '../Button';
import { useState } from 'react';

const Form = () => {
    const teams = [
        'Escolha seu time:',
        'Programação',
        'Front-End',
        'Data Science',
        'DevOps',
        'UX e Design',
        'Mobile',
        'Inovação e Gestão'
    ]
    
    const [name, setName] = useState('');
    const [job, setJob] = useState('');
    const [image, setImage] = useState('');
    const [team, setTeam] = useState('');

    const Saving = (event) => {
        event.preventDefault();
        console.log('Form was submitted => ', name, job, image, team);
    }

    return (
        <section className="form">
            <form onSubmit={Saving}>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <TextInput 
                label="Nome" 
                placeholder="Digite o seu nome" 
                value = {name} 
                typing = {value => setName(value)}/>
                <TextInput 
                label="Cargo" 
                placeholder="Digite o seu cargo"
                value = {job}
                typing = {value => setJob(value)} />
                <TextInput 
                label="Imagem" 
                placeholder="Digite o endereço da imagem"
                value = {image}
                typing = {value => setImage(value)} />
                <DropdownList
                label = "Time" 
                items={teams}
                value = {team}
                Selected = {value => setTeam(value)} />
                <Button>Criar card</Button>
            </form>
        </section>
    )
}

export default Form;