import useLoadSecureData from "../../Hooks/useLoadSecureData";
import { useState } from "react";
import { ConfigProvider, Input, Modal, Table } from "antd";
import { FiSearch } from "react-icons/fi";
import { CiLock, CiUnlock } from "react-icons/ci";
import moment from "moment";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import Button from "../Button";
import { toast } from "react-toastify";

function Users() {
  const axiosSecure = useAxiosSecure();
  const { data, refetch, isLoading } = useLoadSecureData("/auth/admin/users");
  const users = data?.users;

  const [page, setPage] = useState(1);
  const [searchText, setSearchText] = useState("");
  const [user, setUser] = useState(null);

  const columns = [
    {
      title: "Serial No.",
      dataIndex: "key",
      key: "key",
      render: (_, __, index) => (
        <span className="text-secondary">{index + 1}</span>
      ),
    },
    {
      title: "User Name",
      dataIndex: "user",
      key: "user",
      render: (_, record) => {
        return (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
            }}
          >
            <img
              src={record?.photo_url}
              className="w-10 h-10 object-cover rounded-full"
            />

            <p
              style={{
                letterSpacing: 0.4,
                fontSize: "#666666",
                fontWeight: "400",
                color: "#000000",
              }}
            >
              {record?.name}
            </p>
          </div>
        );
      },
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
      render: (text) => <span style={{ color: "#000000" }}>{text}</span>,
    },
    {
      title: "Role",
      dataIndex: "role",
      key: "role",
      render: (text) => <span style={{ color: "#000000" }}>{text}</span>,
    },
    {
      title: "Start Date",
      dataIndex: "createdAt",
      key: "createdAt",
      render: (_, record) => (
        <span style={{ color: "#000000" }}>
          {moment(record?.createdAt).format("YYYY-MM-DD")}
        </span>
      ),
    },
    {
      title: "Action",
      dataIndex: "action",
      key: "action",
      render: (_, record) => (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",

            paddingRight: 10,
          }}
        >
          <div>
            <button
              className="flex justify-center items-center rounded-md"
              onClick={() => setUser(record)}
              style={{
                cursor: "pointer",
                border: "none",
                outline: "none",
                width: "40px",
                height: "32px",
              }}
            >
              {record?.isBlocked ? (
                <CiUnlock size={32} className="text-secondary" />
              ) : (
                <CiLock size={32} className="text-primary" />
              )}
            </button>
          </div>
        </div>
      ),
    },
  ];

  const handleBlock = async () => {
    try {
      const res = await axiosSecure.post(`/auth/block-user/${user?._id}`);
      if (res?.data?.success) {
        refetch();
        setUser(null);
        toast.success(res?.data?.message);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleSearchChange = (e) => {
    e.preventDefault();
    setSearchText(e.target.value);
  };

  return (
    <div className="w-full h-full bg-white">
      <div
        style={{
          borderRadius: "8px",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            margin: "0px 16px",
            padding: "16px 0px",
          }}
        >
          <h3
            style={{
              color: "#FD6C23",
              fontSize: 18,
              fontWeight: "500",
              lineHeight: "24px",
            }}
          >
            Users List
          </h3>

          <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
            <div
              style={{
                width: "350px",
                height: "40px",
                borderRadius: "8px",
              }}
            >
              <ConfigProvider
                theme={{
                  token: {
                    colorPrimary: "#FD6C23",
                  },
                }}
              >
                <Input
                  placeholder="Search..."
                  onChange={handleSearchChange}
                  prefix={<FiSearch size={14} color="#868FA0" />}
                  style={{
                    width: "100%",
                    height: "100%",
                    fontSize: "14px",
                    backgroundColor: "#FAFAFA",
                  }}
                  size="middle"
                />
              </ConfigProvider>
            </div>
          </div>
        </div>

        <div className="relative h-full px-4">
          <ConfigProvider
            theme={{
              components: {
                Pagination: {
                  itemActiveBg: "#FD6C23",
                  borderRadius: "100%",
                  colorText: "white",
                  colorTextDisabled: "#6C6C6C",
                  colorBorder: "#FD6C23",
                },
                Table: {
                  rowHoverBg: "#AFDA8E",
                  colorBgContainer: "#AFDA8E",
                  // headerColor: "#FDFDFD",
                },
              },
              token: {
                colorPrimary: "#264F0B",
              },
            }}
          >
            <Table
              size="small"
              columns={columns}
              rowKey="_id"
              dataSource={users}
              loading={isLoading}
              pagination={{
                total: users?.length,
                current: page,
                pageSize: 10,
                onChange: (page) => setPage(page),
              }}
            />
          </ConfigProvider>
        </div>
      </div>

      <Modal
        centered
        open={user}
        onCancel={() => setUser(null)}
        width={400}
        footer={false}
      >
        <div className="p-6 text-center">
          <p className="text-[#D93D04] text-center font-semibold">
            Are you sure!
          </p>
          <p className="pt-4 pb-12 text-center">
            Do you want to {user?.isBlocked ? "Unblock" : "Block"} this user?
          </p>
          <Button
            fn={handleBlock}
            text={user?.isBlocked ? "Unblock User" : "Block User"}
            style="btn-wide bg-primary text-white border border-primary w-80"
          />
        </div>
      </Modal>
    </div>
  );
}

export default Users;
