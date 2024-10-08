import React, { FC, ChangeEvent, useState } from 'react'
import {
  Box,
  Button,
  Container,
  Dialog,
  DialogContent,
  DialogTitle,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  SelectChangeEvent,
  TextField,
  Typography,
} from '@mui/material'
import Formula from './containers/Formula/Formula'
import { IHuman } from './interfaces/IHuman'
import CalorieInfo from './components/CalorieInfo/CalorieInfo'

const App: FC = () => {
  const [selectedFormula, setSelectedFormula] = useState<string>('')

  const [gender, setGender] = useState<'none' | 'man' | 'woman'>('none')
  const [age, setAge] = useState<number | null>(null)
  const [weight, setWeight] = useState<number | null>(null)
  const [height, setHeight] = useState<number | null>(null)
  const [lifestyle, setLifestyle] = useState<
    'lowActivity' | 'moderateActivity' | 'mediumActivity' | 'highActivity' | 'none'
  >('none')

  const [openCalorieInfo, setOpenCalorieInfo] = useState(false)
  const newHuman: IHuman = {
    age,
    height,
    weight,
    gender,
    lifestyle,
  }

  const handleChangeFormula = (formula: string): void => {
    setSelectedFormula(formula)
  }

  const handleChangeAge = (e: ChangeEvent<HTMLInputElement>): void => {
    const value = e.target.value
    setAge(value === '' ? null : Number(value))
  }

  const handleChangeHeight = (e: ChangeEvent<HTMLInputElement>): void => {
    const value = e.target.value
    setHeight(value === '' ? null : Number(value))
  }

  const handleChangeWeight = (e: ChangeEvent<HTMLInputElement>): void => {
    const value = e.target.value
    setWeight(value === '' ? null : Number(value))
  }

  const handleChangeLifestyle = (e: SelectChangeEvent): void => {
    setLifestyle(e.target.value as 'lowActivity' | 'moderateActivity' | 'mediumActivity' | 'highActivity' | 'none')
  }

  const handleChangeGender = (e: SelectChangeEvent): void => {
    setGender(e.target.value as 'none' | 'man' | 'woman')
  }

  const toggleCalorieInfo = () => {
    setOpenCalorieInfo(true)
  }

  const closeCalorieInfo = () => {
    setOpenCalorieInfo(false)
  }

  return (
    <Container
      maxWidth="md"
      sx={{ mt: 4 }}
    >
      <Paper
        elevation={3}
        sx={{ p: 4 }}
      >
        <Typography
          variant="h4"
          component="h1"
          gutterBottom
          align="center"
        >
          Калькулятор Калорий
        </Typography>

        <Formula
          selectedFormula={selectedFormula}
          human={newHuman}
        />

        <Grid
          container
          spacing={3}
          sx={{ mt: 3 }}
        >
          <Grid
            item
            xs={12}
            sm={6}
          >
            <TextField
              fullWidth
              type="number"
              value={age ?? ''}
              label="Возраст"
              onChange={handleChangeAge}
              variant="outlined"
              InputProps={{ inputProps: { min: 0 } }}
            />
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
          >
            <TextField
              fullWidth
              type="number"
              value={weight ?? ''}
              label="Вес (кг)"
              onChange={handleChangeWeight}
              variant="outlined"
              InputProps={{ inputProps: { min: 0 } }}
            />
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
          >
            <TextField
              fullWidth
              type="number"
              value={height ?? ''}
              label="Рост (см)"
              onChange={handleChangeHeight}
              variant="outlined"
              InputProps={{ inputProps: { min: 0 } }}
            />
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
          >
            <FormControl
              fullWidth
              variant="outlined"
            >
              <InputLabel>Пол</InputLabel>
              <Select
                value={gender}
                onChange={handleChangeGender}
                label="Пол"
              >
                <MenuItem value="none">Не выбран</MenuItem>
                <MenuItem value="man">Мужчина</MenuItem>
                <MenuItem value="woman">Женщина</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid
            item
            xs={12}
          >
            <FormControl
              fullWidth
              variant="outlined"
            >
              <InputLabel>Активность</InputLabel>
              <Select
                value={lifestyle}
                onChange={handleChangeLifestyle}
                label="Активность"
                disabled={selectedFormula === 'tomVenutoFormula'}
              >
                <MenuItem value="none">Активность не указана</MenuItem>
                <MenuItem value="lowActivity">Низкая активность</MenuItem>
                <MenuItem value="moderateActivity">Умеренная активность</MenuItem>
                <MenuItem value="mediumActivity">Средняя активность</MenuItem>
                <MenuItem value="highActivity">Высокая активность</MenuItem>
              </Select>
            </FormControl>
          </Grid>
        </Grid>

        <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, mt: 4 }}>
          <Button
            variant="contained"
            color={selectedFormula === 'harrisBenedictFormula' ? 'warning' : 'primary'}
            onClick={() => handleChangeFormula('harrisBenedictFormula')}
          >
            Benedict
          </Button>
          <Button
            variant="contained"
            color={selectedFormula === 'mifflinSaintJeorFormula' ? 'warning' : 'primary'}
            onClick={() => handleChangeFormula('mifflinSaintJeorFormula')}
          >
            Saint Jeor
          </Button>
          <Button
            variant="contained"
            color={selectedFormula === 'tomVenutoFormula' ? 'warning' : 'primary'}
            onClick={() => handleChangeFormula('tomVenutoFormula')}
          >
            Tom Venuto
          </Button>
        </Box>

        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
          <Button
            variant="contained"
            onClick={toggleCalorieInfo}
          >
            Показать аннотацию
          </Button>
        </Box>

        <Dialog
          open={openCalorieInfo}
          onClose={closeCalorieInfo}
          maxWidth="md"
          fullWidth
        >
          <DialogTitle>
            <Typography variant="h5">Информация о расчёте калорий</Typography>
          </DialogTitle>
          <DialogContent>
            <CalorieInfo />
            <Box sx={{ display: 'flex', justifyContent: 'center', mt: 3 }}>
              <Button
                variant="contained"
                onClick={closeCalorieInfo}
              >
                Закрыть
              </Button>
            </Box>
          </DialogContent>
        </Dialog>
      </Paper>
    </Container>
  )
}

export default App
