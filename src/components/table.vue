<template>
  <div class="container pt-5 vh-100">
    <div
      class="p-3 mb-3 d-flex justify-content-between align-items-center bg-light"
    >
      <h3 class="m-0">我的會議</h3>
      <nuxt-link class="d-flex justify-content-end nav-link" to="index"
        >登出</nuxt-link
      >
    </div>
    <div class="notice p-3 mb-3">
      <h5>公告</h5>
      <p>本月 14 日會議室電腦系統升級，當日不開放會議預約。</p>
    </div>
    <table class="table table-striped mb-3">
      <thead>
        <tr>
          <th scope="col">日期</th>
          <th scope="col">時間</th>
          <th scope="col">會議名稱</th>
          <th scope="col">編輯</th>
        </tr>
      </thead>
      <tbody>
        <tr class="disabled">
          <th scope="row">2022-03-02</th>
          <td>14:00-16:00</td>
          <td>總務處月會</td>
          <td>
            <div class="d-flex justify-content-between align-items-center">
              <div>編輯</div>
              <div>刪除</div>
            </div>
          </td>
        </tr>
        <tr class="disabled">
          <th scope="row">2022-03-07</th>
          <td>09:00-10:00</td>
          <td>事務組週會</td>
          <td>
            <div class="d-flex justify-content-between align-items-center">
              <div>編輯</div>
              <div>刪除</div>
            </div>
          </td>
        </tr>
        <tr class="disabled">
          <th scope="row">2022-03-14</th>
          <td>09:00-10:00</td>
          <td>事務組週會</td>
          <td>
            <div class="d-flex justify-content-between align-items-center">
              <div>編輯</div>
              <div>刪除</div>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
    <button class="btn btn-main w-100" type="button">新增會議</button>
  </div>
</template>
<script>
export default {
  props: {
    meeting: {
      title: "",
    },
  },
};
</script>
<style scoped>
.notice {
  background-color: #e1e3fb;
}
.btn-main {
  background-color: #686CE5;
  color: #fff;
}
</style>
