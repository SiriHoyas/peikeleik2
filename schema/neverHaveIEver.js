export default {
  name: 'neverHaveIEver',
  title: 'Jeg har aldri',
  type: 'document',
  fields: [
    {
      name: 'statement',
      title: 'Utsagn',
      type: 'string',
      description: "Fyll inn et utsagn. Du behøver ikke skrive 'Jeg har aldri...' foran.",
      validation: (Rule) => Rule.required(),
    },
  ],
}
