import { Flex, AlertDialog, Button,Theme, DataList,Badge,Code,IconButton  } from '@radix-ui/themes';
import { Link,useNavigate } from 'react-router-dom';
import {deleteData}  from '../hooks/Delete';
const Perfil = ()=>{
    let apiUrl="http://localhost:3001/users/"
    const navegar=useNavigate()
    const name =localStorage.getItem("usuario")
    const id =localStorage.getItem("idUsuario")
    const mail =localStorage.getItem("email")
    const handleDeleteClick = async (id) => {      {/*con esta funcion elimino la tarea*/}
        localStorage.clear()
        await deleteData(id,apiUrl);
        navegar('/')
    };
    return(
        <div className='contPrefil'>

            <Theme accentColor="crimson" grayColor="sand" radius="large" scaling="95%">
                <div>
            <DataList.Root>
                <DataList.Item align="center">
                    <DataList.Label minWidth="88px">Status</DataList.Label>
                    <DataList.Value>
                    <Badge color="jade" variant="soft" radius="full">
                        Authorized
                    </Badge>
                    </DataList.Value>
                </DataList.Item>
                <DataList.Item>
                    <DataList.Label minWidth="88px">ID</DataList.Label>
                    <DataList.Value>
                    <Flex align="center" gap="2">
                        <Code variant="ghost">{id}</Code>
                        <IconButton
                        size="1"
                        aria-label="Copy value"
                        color="gray"
                        variant="ghost"
                        >
                        </IconButton>
                    </Flex>
                    </DataList.Value>
                    </DataList.Item>
                    <DataList.Item>
                        <DataList.Label minWidth="100px">Name</DataList.Label>
                        <DataList.Value>{name}</DataList.Value>
                    </DataList.Item>
                    <DataList.Item>
                        <DataList.Label minWidth="88px">Email</DataList.Label>
                        <DataList.Value>
                        <Link href="{mail}">{mail}</Link>
                        </DataList.Value>
                    </DataList.Item>
                    </DataList.Root>
                    </div>
                    <AlertDialog.Root>
                    <AlertDialog.Trigger>
                    <Button color="red">Eliminar Cuenta</Button>
                    </AlertDialog.Trigger>
                    

                <AlertDialog.Content maxWidth="450px">
                <AlertDialog.Title>Eliminar Cuenta</AlertDialog.Title>
                <AlertDialog.Description size="2">
                Esta seguro de querer eliminar su cuenta?
                </AlertDialog.Description>

                <Flex gap="3" mt="4" justify="end">
                <AlertDialog.Cancel>
                    <Button variant="soft" color="gray">
                    Cancel
                    </Button>
                </AlertDialog.Cancel>
                <AlertDialog.Action>
                    <Button variant="solid" color="red" onClick={() => handleDeleteClick(id)}>
                    Eliminar
                    </Button>
                </AlertDialog.Action>
                </Flex>
                </AlertDialog.Content>
                </AlertDialog.Root>
             </Theme>

        </div>
    )
}
export default Perfil