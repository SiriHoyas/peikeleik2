export default {
  name: 'pointingGame',
  title: 'Peikeleik',
  type: 'document',
  fields: [
    {
      name: 'statement',
      title: 'Peikeleik',
      type: 'string',
      description: 'Pek på personen som mest sannsynlig vil gjøre det som blir sagt.',
      validation: (Rule) => Rule.required(),
    },
  ],
}
