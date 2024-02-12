import WavyLabel from './WavyLabel';
import Badge from './elements/Badge';

const schedule = [
  {
    label: 'Lunedì',
    openAt: '07:00',
    closeAt: '01:00'
  },
  {
    label: 'Martedì'
  },
  {
    label: 'Mercoledì',
    openAt: '07:00',
    closeAt: '01:00'
  },
  {
    label: 'Giovedì',
    openAt: '07:00',
    closeAt: '01:00'
  },
  {
    label: 'Venerdì',
    openAt: '07:00',
    closeAt: '01:00'
  },
  {
    label: 'Sabato e Domenica',
    openAt: '07:00',
    closeAt: '01:00'
  }
];

export default function WeeklySchedule() {
  return (
    <ul className='mt-8'>
      {schedule.map((day, idx) => (
        <li key={idx} className='mb-2'>
          <WavyLabel
            title={day.label}
            subtitle={day.openAt && `dalle ${day.openAt} alle ${day.closeAt}`}
          >
            <Badge
              color={day.openAt ? 'neutral' : 'primary'}
              variant='contained'
              label={day.openAt ? 'Aperti' : 'Chiusi'}
              className={day.openAt ? 'text-primary' : ''}
            />
          </WavyLabel>
        </li>
      ))}
    </ul>
  );
}
