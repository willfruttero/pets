import { Button } from '@mui/material'
import { Descricao, Foto, Informacoes, ItemLista, ListaStyled, Nome } from './Lista.style'


export default function Lista() {
    return (
        <ListaStyled>
            <ItemLista>
                <Foto src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcAsTuwn07pci-ib_g6Yz8uqacuX9BXMftHw&usqp=CAU' />
                <Informacoes>
                    <Nome>Bidu</Nome>
                    <Descricao>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et, fuga quibusdam! Natus autem odit vero veritatis assumenda iusto a tempora eveniet animi labore, beatae doloremque ducimus minus similique eum dolores.
                    </Descricao>
                    <Button
                        variant={'contained'}
                        fullWidth>Adotar</Button>
                </Informacoes>
            </ItemLista>

            <ItemLista>
                <Foto src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcAsTuwn07pci-ib_g6Yz8uqacuX9BXMftHw&usqp=CAU' />
                <Informacoes>
                    <Nome>Picareta</Nome>
                    <Descricao>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et, fuga quibusdam! Natus autem odit vero veritatis assumenda iusto a tempora eveniet animi labore, beatae doloremque ducimus minus similique eum dolores.
                    </Descricao>
                    <Button
                        variant={'contained'}
                        fullWidth>Adotar</Button>
                </Informacoes>
            </ItemLista>

        </ListaStyled>

    )
}