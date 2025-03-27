import {
  User,
  Post,
  Comment,
  UserPage,
  UserHasPost,
  sequelize,
} from "../src/models/index.js";

async function seed() {
  try {
    // Sync database
    await sequelize.sync({ force: true, cascade: true });

    // Create Users
    const users = await User.bulkCreate([
      {
        userName: "John_Doe",
        email: "john@example.com",
        password: "hashedPassword123",
        profilePicture: `https://example.com/profiles/1.jpg`,
      },
      {
        userName: "Jane_Smith",
        email: "jane@example.com",
        password: "hashedPassword456",
        profilePicture: `https://example.com/profiles/2.jpg`,
      },
      {
        userName: "Bob_Wilson",
        email: "bob@example.com",
        password: "hashedPassword789",
        profilePicture: `https://example.com/profiles/3.jpg`,
      },
    ]);

    // Create UserPages
    await UserPage.bulkCreate(
      users.map((user) => ({
        idUser: user.id,
        bio: `Bio for ${user.userName}`,
      }))
    );

    // Create Posts
    const posts = await Post.bulkCreate([
      {
        postContent: "First post content",
        likeNumber: 10,
      },
      {
        postContent: "Second post content",
        likeNumber: 15,
      },
      {
        postContent: "Third post content",
        likeNumber: 20,
      },
    ]);

    // Create UserHasPosts associations
    await UserHasPost.bulkCreate([
      {
        idUser: users[0].id,
        idPost: posts[0].id,
      },
      {
        idUser: users[1].id,
        idPost: posts[1].id,
      },
      {
        idUser: users[2].id,
        idPost: posts[2].id,
      },
    ]);

    // Create Comments
    await Comment.bulkCreate([
      {
        idUser: users[0].id,
        idPost: posts[1].id,
        CommentContent: "Great post!",
      },
      {
        idUser: users[1].id,
        idPost: posts[0].id,
        CommentContent: "Interesting perspective",
      },
      {
        idUser: users[2].id,
        idPost: posts[2].id,
        CommentContent: "Thanks for sharing",
      },
    ]);

    console.log("Database seeded successfully!");
  } catch (error) {
    console.error("Error seeding database:", error);
  } finally {
    await sequelize.close();
  }
}

seed();
