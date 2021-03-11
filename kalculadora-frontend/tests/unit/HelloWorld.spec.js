import { shallowMount } from '@vue/test-utils'
import HelloWorld from '@/components/HelloWorld.vue'

describe('HelloWorld.vue', () => {

  const axios = {
    get: async (params) => ({
      data: { resultado: 3 }
    })
  };

  it('renders the result returned from the API call', async (done) => {
    const wrapper = shallowMount(HelloWorld, {
      props: { msg: 'new message' }, 
      global: {
        mocks: {
          axios: axios
        }
      }
    })
    
    await wrapper.get('[data-test="op1"]').setValue(1);
    await wrapper.get('[data-test="op2"]').setValue(2);
    await wrapper.get('[data-test="soma"').trigger('click');

    wrapper.vm.$nextTick(() => {
      expect(wrapper.get('[data-test="resultado"]').element.textContent).toBe('Resultado: 3');
      done()
    })
  })
})
