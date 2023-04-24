// Copyright (C) 2012-2023 Zammad Foundation, https://zammad-foundation.org/

import createInput from '#shared/form/core/createInput.ts'
import addLink from '#shared/form/features/addLink.ts'
import formUpdaterTrigger from '#shared/form/features/formUpdaterTrigger.ts'
import removeValuesForNonExistingOptions from '#shared/form/features/removeValuesForNonExistingOptions.ts'
import FieldTreeSelectInput from './FieldTreeSelectInput.vue'

const fieldDefinition = createInput(
  FieldTreeSelectInput,
  [
    'clearable',
    'historicalOptions',
    'multiple',
    'noFiltering',
    'noOptionsLabelTranslation',
    'options',
    'rejectNonExistentValues',
    'sorting',
  ],
  {
    features: [
      addLink,
      formUpdaterTrigger(),
      removeValuesForNonExistingOptions,
    ],
  },
  { addArrow: true },
)

export default {
  fieldType: 'treeselect',
  definition: fieldDefinition,
}

export type { FlatSelectOption } from './types.ts'
