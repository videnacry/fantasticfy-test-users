'use client'

import React, { FormEvent, useCallback, useReducer } from 'react';
import Avatar from '@/src/components/avatar';
import PersonAddIcon from './person-add.svg';
import Typography from '@/src/components/typography';
import TextField from '@/src/components/text-field';
import Button from '@/src/components/button';
import Grid from '@/src/components/grid';
import './index.css';
import { initialState, reducer, stateFields, type StateField } from './reducer';
import Link from 'next/link';

export default function AddUser() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const fieldSetHandler = useCallback(
    (field:StateField, e:FormEvent<HTMLInputElement>) => dispatch({ type: `set/${field}/value`, payload: e.currentTarget.value }),
    [dispatch]
  );

  const fieldSetErrorHandler = useCallback(
    (field:StateField, message:string) => dispatch({ type: `set/${field}/error`, payload: message }),
    [dispatch]
  );

  const fieldCheckHandler = useCallback(
    (field:StateField) => dispatch({ type: `check/${field}/value`, payload: '' }),
    [dispatch]
  );

  const addUser = useCallback(async () => {
    stateFields.forEach((field) => fieldCheckHandler(field));

    if (!Object.values(state).some((field) => field.error)) {
      const newUser = {
        username: state.username.value,
        email: state.email.value,
        name: state.name.value,
        address: state.address.value
      }
  
      const url = location.origin + '/api/users'
      const options = {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newUser),
      }
      try {
        const response = await fetch(url, options)
        const result = await response.json()
        if (!result.savedUser) {
          switch (result.message.substring(0,4)) {
            case 'emai': alert(`Lo sentimos pero el correo electrónico ${newUser.email} ya pertenece a un usuario`); break;
            case 'user': alert(`Lo sentimos pero el nombre de usuario ${newUser.username} ya pertenece a un usuario`); break;
            case 'name': alert(`Lo sentimos pero el nombre ${newUser.name} ya pertenece a un usuario`); break;
            default: alert(result.message); break;
          }
        } else {
          alert(`El usuario ${result.savedUser.username} ha sido creado exitosamente!`)
          dispatch({type:'set/all/error', payload:''})
        }
      } catch (e:any) {
        alert(e.message)
      }
    }
  }, [state, fieldCheckHandler]);

  return (
    <>
    <main className="add-p">
      <form className="add-p_container" onSubmit={(e) => e.preventDefault()}>
        <Avatar>{<img src={PersonAddIcon.src} width="60%" />}</Avatar>
        <Typography variant="h5" component="h1">
          Nuevo usuario
        </Typography>
        <Grid container spacing={2} style={{ marginTop: '8px' }}>
          {stateFields.map((field:StateField) => (
            <Grid item key={field}>
              <TextField
                label={state[field].label}
                value={state[field].value}
                onInput={(e) => fieldSetHandler(field, e)}
                onFocus={() => fieldSetErrorHandler(field, '')}
                onBlur={() => fieldCheckHandler(field)}
                style={{ width: '100%' }}
              />
              <Typography variant="caption" component="p" style={{ color: 'red' }}>
                {state[field].error}
              </Typography>
            </Grid>
          ))}
          <Grid item>
            <Button onClick={addUser} style={{ width: '100%', marginTop: '16px' }}>
              Nuevo usuario
            </Button>
            <Button onClick={() => {}} style={{ width: '100%', marginTop: '16px' }}>
              <Link href={'/'} style={{color:'white', textDecoration:'none'}}>Ir a tabla de usuarios</Link>
            </Button>
          </Grid>
        </Grid>
      </form>
    </main>
    </>
  );
}