import List "mo:core/List";
import Runtime "mo:core/Runtime";

actor {
  type BookingRequest = {
    name : Text;
    email : Text;
    phone : Text;
    message : Text;
  };

  let requests = List.empty<BookingRequest>();

  public shared ({ caller }) func submit(name : Text, email : Text, phone : Text, message : Text) : async () {
    if (name.isEmpty() or email.isEmpty() or phone.isEmpty() or message.isEmpty()) {
      Runtime.trap("All fields are required. ");
    };
    let request : BookingRequest = {
      name;
      email;
      phone;
      message;
    };
    requests.add(request);
  };

  public query ({ caller }) func getAllRequests() : async [BookingRequest] {
    requests.toArray();
  };
};
