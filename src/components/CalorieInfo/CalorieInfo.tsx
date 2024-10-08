import React, { FC } from 'react'
import { Box, Typography, Paper } from '@mui/material'

const CalorieInfo: FC = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '400px',
        mt: 4,
      }}
    >
      <Paper
        elevation={3}
        sx={{ p: 4, textAlign: 'left', width: '100%', maxWidth: '700px' }}
      >
        <Typography
          variant="h5"
          component="h2"
          gutterBottom
        >
          Как рассчитать свою норму калорий?
        </Typography>
        <Typography
          variant="body1"
          paragraph
        >
          Суточная норма калорий рассчитывается на основе двух ключевых факторов: базового обмена веществ (BMR) и уровня
          физической активности. Первый показатель отражает метаболизм в состоянии покоя, его значения различаются в
          зависимости от возраста.
        </Typography>
        <Typography
          variant="body1"
          paragraph
        >
          Второй фактор — коэффициент физической активности (КФА):
          <ul>
            <li>1,4 — малоподвижный образ жизни;</li>
            <li>1,6 — низкая активность;</li>
            <li>1,9 — средняя активность;</li>
            <li>2,2 — высокая активность или физический труд.</li>
          </ul>
        </Typography>
        <Typography
          variant="body1"
          paragraph
        >
          Норму калорий можно вычислить по нескольким формулам, как самостоятельно, так и с помощью
          онлайн-калькуляторов. Важно помнить, что любые расчеты дают приблизительный результат, и ни одно уравнение не
          дает абсолютной точности.
        </Typography>
        <Typography
          variant="h6"
          gutterBottom
        >
          Формула Харриса-Бенедикта
        </Typography>
        <Typography
          variant="body1"
          paragraph
        >
          Разработана в 1919 году, учитывает рост, вес, возраст, пол и уровень физической активности.
          <ul>
            <li>Для женщин: BMR = 655 + (9,6 × вес в кг) + (1,8 × рост в см) — (4,7 × возраст в годах) × КФА.</li>
            <li>Для мужчин: BMR = 66 + (13,7 × вес в кг) + (5 × рост в см) — (6,76 × возраст в годах) × КФА.</li>
          </ul>
        </Typography>
        <Typography
          variant="h6"
          gutterBottom
        >
          Формула Миффлина-Сан Жеора
        </Typography>
        <Typography
          variant="body1"
          paragraph
        >
          Создана в 2005 году, существует в двух вариантах: с учетом физической активности и без.
          <ul>
            <li>Первый вариант (без учета активности):</li>
            <ul>
              <li>Для женщин: BMR = 9,99 × вес (кг) + 6,25 × рост (см) — 4,92 × возраст — 161.</li>
              <li>Для мужчин: BMR = 9,99 × вес (кг) + 6,25 × рост (см) — 4,92 × возраст + 5.</li>
            </ul>
            <li>Второй вариант (с учетом активности):</li>
            <ul>
              <li>Для женщин: BMR = (10 × вес в кг + 6,25 × рост в см — 5 × возраст в годах — 161) × КФА.</li>
              <li>Для мужчин: BMR = (10 × вес в кг + 6,25 × рост в см — 5 × возраст в годах + 5) × КФА.</li>
            </ul>
          </ul>
        </Typography>
        <Typography
          variant="h6"
          gutterBottom
        >
          Формула Кетча-Макардла
        </Typography>
        <Typography
          variant="body1"
          paragraph
        >
          Учитывает процент жировой массы тела.
          <ul>
            <li>BMR = 370 + (21,6 × масса тела без жира).</li>
          </ul>
        </Typography>
        <Typography
          variant="h6"
          gutterBottom
        >
          Формула Тома Венуто
        </Typography>
        <Typography
          variant="body1"
          paragraph
        >
          Эта формула, разработанная бодибилдером Томом Венуто, популярна среди спортсменов.
          <ul>
            <li>Для женщин: BMR = 665 + (9,6 × вес в кг) + (1,8 × рост в см) — (4,7 × возраст в годах).</li>
            <li>Для мужчин: BMR = 66 + (13,7 × вес в кг) + (5 × рост в см) — (6,8 × возраст в годах).</li>
          </ul>
        </Typography>
      </Paper>
    </Box>
  )
}

export default CalorieInfo
