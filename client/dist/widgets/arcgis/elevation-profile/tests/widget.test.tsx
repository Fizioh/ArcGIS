import { configure } from 'enzyme'
// setup file
import * as Adapter from 'enzyme-adapter-react-16'

configure({ adapter: new Adapter() })

describe('Elelvation Profile widget', function () {
  beforeAll(() => {
  })

  it('EP test', () => {
    expect(true).toBe(true)
  })
})
