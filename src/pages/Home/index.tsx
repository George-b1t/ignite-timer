import {
  HomeContainer,
  FormContainer,
  CountdownContainer,
  Separator,
  StartCountdownButton,
  TaskInput,
  MinutesInput,
} from './styles'

import { Play } from 'phosphor-react'

function Home() {
  return (
    <HomeContainer>
      <form>
        <FormContainer>
          <label htmlFor="task">Vou trabalhar em</label>
          <TaskInput id="task" placeholder="Dê um nome para o seu projeto" />

          <label htmlFor="minutesAmount">durante</label>
          <MinutesInput id="minutesAmount" type="number" placeholder="00" />

          <span>minutos.</span>
        </FormContainer>

        <CountdownContainer>
          <span>0</span>
          <span>0</span>
          <Separator>:</Separator>
          <span>0</span>
          <span>0</span>
        </CountdownContainer>

        <StartCountdownButton disabled type="submit">
          <Play size="24" />
          Começar
        </StartCountdownButton>
      </form>
    </HomeContainer>
  )
}

export { Home }
