import { expect, test } from 'vitest'
import { mount } from '@vue/test-utils'
import Crew from './crew.vue'
import { createTestingPinia } from '@pinia/testing'

test('vue component mounts', () => {
    const wrapper = mount(Crew,{
        global:{
            plugins:[createTestingPinia()]
        }
    })

    expect(wrapper.exists()).toBeTruthy()
})