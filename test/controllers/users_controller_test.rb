require 'test_helper'

class UsersControllerTest < ActionDispatch::IntegrationTest
  setup do
    @user = users(:one)
  end

  test "should get index" do
    get users_url, as: :json
    assert_response :success
  end

  test "should create user" do
    assert_difference('User.count') do
      post users_url, params: { user: { address: @user.address, city: @user.city, email: @user.email, first_name: @user.first_name, last_name: @user.last_name, password_digest: @user.password_digest, phone_number: @user.phone_number, state: @user.state, username: @user.username, zip_code: @user.zip_code } }, as: :json
    end

    assert_response 201
  end

  test "should show user" do
    get user_url(@user), as: :json
    assert_response :success
  end

  test "should update user" do
    patch user_url(@user), params: { user: { address: @user.address, city: @user.city, email: @user.email, first_name: @user.first_name, last_name: @user.last_name, password_digest: @user.password_digest, phone_number: @user.phone_number, state: @user.state, username: @user.username, zip_code: @user.zip_code } }, as: :json
    assert_response 200
  end

  test "should destroy user" do
    assert_difference('User.count', -1) do
      delete user_url(@user), as: :json
    end

    assert_response 204
  end
end
