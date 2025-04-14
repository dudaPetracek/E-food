import { TagContainer } from './styles'

export type Props = {
  size?: 'small' | 'big'
  children: string
}

const capitalize = (str: string) => {
  return str.charAt(0).toUpperCase() + str.slice(1)
}

const Tag = ({ children, size = 'small' }: Props) => (
  <TagContainer size={size}>{capitalize(children)}</TagContainer>
)

export default Tag
