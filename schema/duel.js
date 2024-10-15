export default {
  name: 'duel',
  title: 'Rygg mot rygg',
  type: 'document',
  description:
    'I rygg mot rygg får to deltagere stå med ryggen mot hverandre og svarer på spørsmål om hvem som er mest sannsynlig til å gjøre noe. Fyll inn tre utsagn.',
  fields: [
    {
      name: 'firstStatement',
      title: 'Første utsagn',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'secondStatement',
      title: 'Andre utsagn',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'thirdStatement',
      title: 'Tredje utsagn',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
  ],
}
