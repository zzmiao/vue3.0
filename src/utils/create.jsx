import { defineComponent } from 'vue'
import '@/assets/main.scss'

const defaultStyles = {
  border: '1px solid #eee',
  borderRadius: '5px',
  padding: '10px 15px',
  margin: '10px 0'
}

export default defineComponent({
  props: {
    name: {
      type: String,
      default: 'hello world'
    },
    params: {
      type: Object,
      default: () => ({})
    }
  },
  data() {
    return {
      count: 0,
      styles: {
        border: '1px solid #eee',
        borderRadius: '5px',
        padding: '10px 15px',
        margin: '10px 0'
      }
    }
  },
  render(props) {
    return (
      <>
        <div style={this.styles}>
          <h1>当前计数：{this.count}</h1>
          <p style={{ color: 'red' }}>姓名：{props.name}</p>
          <button onClick={() => this.count++}>增加</button>
        </div>
        <div style={defaultStyles}>
          <div className="row">
            <div className="col-6">col-6</div>
            <div className="col-6">col-6</div>
          </div>
          {props.params.map((item, index) => {
            if (item.age > 30) {
              return (
                <ul className="ul-block ul-block-current" key={index}>
                  <li>{index + 1}</li>
                  <li>{item.name ? '真实姓名' : '你个骗子'}</li>
                  <li>{item.age}</li>
                  <li>{item.address}</li>
                </ul>
              )
            } else {
              return (
                <ul className="ul-block" key={index}>
                  <li>{index + 1}</li>
                  <li>{item.name ? '真实姓名' : '你个骗子'}</li>
                  <li>{item.age}</li>
                  <li>{item.address}</li>
                </ul>
              )
            }
          })}
        </div>
      </>
    )
  }
})
