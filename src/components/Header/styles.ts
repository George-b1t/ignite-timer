import styled, { css } from 'styled-components'

const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  nav {
    display: flex;
    gap: 0.5rem;

    a {
      width: 3rem;
      height: 3rem;

      display: flex;
      justify-content: center;
      align-items: center;

      ${(props) => css`
        color: ${props.theme['gray-100']};

        border-top: 3px solid ${props.theme['gray-800']};
        border-bottom: 3px solid ${props.theme['gray-800']};

        &:hover {
          border-bottom: 3px solid ${props.theme['green-500']};
        }

        &.active {
          color: ${(props) => props.theme['green-500']};
        }
      `}
    }
  }
`

export { HeaderContainer }
