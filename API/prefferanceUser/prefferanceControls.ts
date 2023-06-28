import PrefferanceModel from "../prefferanceUser/prefferanceModel";
import UserModel from "../users/usersModel";

export const addNewuserPrefferance = async (req: any, res: any) => {
  try {
      const {
        minHeight,
        maxHeight,
        minAge,
        maxAge,
        bodyType,
        gender,
        kids,
        smoking,
        education,
        relationship,
        religious,
        email
      } = req.body;


          const userDB = await UserModel.findOne({email});
          if (!userDB) throw new Error("no user found");
          const userId = userDB._id.toString();
          console.log(userId);
          
    const userPreffer = await PrefferanceModel.create({
      userId,
      minHeight,
      maxHeight,
      minAge,
      maxAge,
      bodyType,
      gender,
      kids,
      smoking,
      education,
      relationship,
      religious
    });
    console.log("prefferance added");  
    res.status(201).send({ ok: true })
  } catch (error) {
    if ((error as { code: number }).code === 11000) {
      res
        .status(409)
        .send({ ok: false, error: `prefferance to this user already exists` });
    }
    console.error(error);
  }
}
