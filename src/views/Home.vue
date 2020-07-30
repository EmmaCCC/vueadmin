<template>
  <div class="home">
    <div class="container flex-column">
      <div class="header">
        <div class="logo flex center">
          <img src="@/assets/logo.png" alt />
          <span>企业ERP管理系统</span>
        </div>
        <div class="profile flex center">
          <el-badge :value="3" class="item">
            <span class="el-dropdown-link">消息</span>
          </el-badge>
          <el-dropdown @command="handleCommand">
            <span class="el-dropdown-link">
              亲爱的xxx，你好
              <i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>个人信息</el-dropdown-item>
              <el-dropdown-item>修改密码</el-dropdown-item>
              <el-dropdown-item command="logout" divided
                >注销登录</el-dropdown-item
              >
            </el-dropdown-menu>
          </el-dropdown>
        </div>
      </div>
      <div class="container">
        <div class="aside">
          <el-menu
            :default-active="'/dashboard'"
            class="el-menu-vertical-demo"
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#ffd04b"
            router
            @select="selectMenu"
          >
            <el-submenu
              v-for="menu in menus"
              :key="menu.name"
              :index="menu.name"
            >
              <template slot="title">
                <i :class="menu.icon"></i>
                <span>{{ menu.name }}</span>
              </template>
              <el-menu-item
                v-for="item in menu.items"
                :key="item.name"
                :index="item.path"
              >
                <i :class="item.icon"></i>
                <span slot="title">{{ item.name }}</span>
              </el-menu-item>
            </el-submenu>
          </el-menu>
        </div>
        <div class="main">
          <div class="breadnav">
            <el-breadcrumb separator="/">
              <el-breadcrumb-item>{{ breadcrumbs[0] }}</el-breadcrumb-item>
              <el-breadcrumb-item>{{ breadcrumbs[1] }}</el-breadcrumb-item>
            </el-breadcrumb>
          </div>
          <el-divider></el-divider>
          <div class="content">
            <!-- <transition name="fade" mode="out-in">
              <router-view></router-view>
            </transition> -->
            <el-tabs
              v-model="currentTabName"
              type="border-card"
              closable
              @tab-remove="removeTab"
              @tab-click="clickTab"
            >
              <el-tab-pane
                v-for="item in tabs"
                :key="item.name"
                :label="item.title"
                :name="item.name"
              >
                <keep-alive>
                  <router-view></router-view>
                </keep-alive>
              </el-tab-pane>
            </el-tabs>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      breadcrumbs: ["工作台", "主面板"],
      menus: [
        {
          name: "工作台",
          path: "",
          icon: "el-icon-monitor",
          items: [
            {
              name: "主面板",
              path: "/dashboard",
              icon: "el-icon-tickets",
            },
          ],
        },
        {
          name: "系统管理",
          path: "",
          icon: "el-icon-setting",
          items: [
            {
              name: "人员管理",
              path: "/user",
              icon: "el-icon-user",
            },
            {
              name: "角色管理",
              path: "/role",
              icon: "el-icon-document-remove",
            },
          ],
        },
      ],
      currentTabName: "/dashboard",
      tabs: [
        {
          title: "工作台",
          name: "/dashboard"
        }
      ],
    };
  },
  watch: {
    $route(to, from) {
      var dest = to.path;
      if (dest) {
        for (let i = 0; i < this.menus.length; i++) {
          const menu = this.menus[i];

          for (let j = 0; j < menu.items.length; j++) {
            const item = menu.items[j];
            if (item.path === dest) {
              this.breadcrumbs = [];
              this.breadcrumbs.push(menu.name);
              this.breadcrumbs.push(item.name);
              break;
            }
          }
        }
      }
    },
  },
  created() {
    this.$router.replace("/");
  },
  methods: {
    handleCommand(command) {
      if (command === "logout") {
        this.$router.push("login");
      }
    },
    selectMenu(index, data) {
      let title = "";
      for (let i = 0; i < this.menus.length; i++) {
        const menu = this.menus[i];
        for (let j = 0; j < menu.items.length; j++) {
          const item = menu.items[j];
          if (item.path === index) {
            title = item.name;
            break;
          }
        }
      }
      var tab = this.tabs.findIndex((a) => a.name == index);
      if (tab < 0) {
        this.tabs.push({
          title: title,
          name: index,
          content: index,
        });
      }
      this.currentTabName = index;
    },
    clickTab(tab) {
      if (this.$route.path != tab.name) {
        var route = tab.name.substring(1);
        this.$router.push(route);
      }
    },
    removeTab(targetName) {
      let tabs = this.tabs;
      let activeName = this.currentTabName;
      if (activeName === targetName) {
        tabs.forEach((tab, index) => {
          if (tab.name === targetName) {
            let nextTab = tabs[index + 1] || tabs[index - 1];
            if (nextTab) {
              activeName = nextTab.name;
            }
          }
        });
      }

      this.currentTabName = activeName;
      this.tabs = tabs.filter((tab) => tab.name !== targetName);

      if (this.$route.path != activeName) {
        var route = activeName.substring(1);
        this.$router.push(route);
      }
    },
  },
};
</script>
<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: all 0.1s ease;
}

.fade-enter,
.fade-leave-active {
  opacity: 0;
}
.home {
  height: 100%;
}

.container,
.aside,
.main {
  height: 100%;
}

.aside,
.header {
  background-color: rgb(84, 92, 100);
}

.header {
  height: 65px;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #393d49;
}

.header .logo {
  width: 260px;
  color: #dfdddd;
  font-size: 20px;
  font-weight: bold;
}

.header .logo img {
  width: 50px;
  height: 50px;
}

.header .profile {
  justify-content: flex-start;
}
.header .profile,
.header .profile .el-dropdown {
  font-size: 15px;
  color: #dfdddd;
  margin: 12px;
}

.aside {
  width: 260px;
}
.el-menu {
  border-right: none;
}
.main {
  background-color: #f2f2f2;
  flex: 1;
}
.main .el-breadcrumb {
  font-size: 15px;
}
.main .breadnav {
  padding: 15px;
  background-color: #fff;
  margin: 15px;
}

.main .content {
  background-color: #fff;
  margin-top: 15px;
  padding: 15px;
}
</style>
