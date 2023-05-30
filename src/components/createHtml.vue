<script>
import { defineComponent } from 'vue';

export default defineComponent({
  data() {
    return {
      count: 0,
    };
  },
  render() {
    return (
      <div>
        <h1>当前计数：{this.count}</h1>
        <button onClick={() => this.count++}>增加</button>
      </div>
    );
  },
});
</script>
