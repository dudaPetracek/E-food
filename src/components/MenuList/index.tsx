import { MenuItem as MenuItemType } from '../../models/Menu'
import MenuItem from '../MenuItem'
import * as S from './styles'

type Props = {
  items: MenuItemType[]
  onItemClick: (item: MenuItemType) => void
}

const MenuList = ({ items, onItemClick }: Props) => (
  <S.Container>
    <S.List>
      {items.map((item) => (
        <li key={item.id}>
          <MenuItem
            title={item.nome}
            description={item.descricao}
            image={item.foto}
            onClick={() => onItemClick(item)}
          />
        </li>
      ))}
    </S.List>
  </S.Container>
)

export default MenuList
