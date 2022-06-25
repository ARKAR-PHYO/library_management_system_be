const { PrismaClient } = require("@prisma/client");
const { ADMIN_EMAIL, ADMIN_PASSWORD } = require("../src/config");
const { hashedPassword } = require("../src/helpers");
const prisma = new PrismaClient();

const main = async () => {
  await prisma.employees.create({
    data: {
      name: "Super Admin",
      bio: "Super Admin Bio",
      email: ADMIN_EMAIL,
      phone_number: "09789506439",
      address: "No(615,1), Pyay Road, Kamayut Township, Yangon, Myanmar",
      nrc: "3/BaTaDa(N)012345",
      dob: "18-05-1995",
      password: hashedPassword(ADMIN_PASSWORD),
      employee_type: "super_admin",
    },
  });
};

main()
  .catch((error) => {
    throw error;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
