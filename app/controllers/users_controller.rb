class UsersController < ApplicationController
  before_action :set_user, only: [:show, :update, :destroy]
  before_action :authorize_request, except: [:create, :index, :show]


  # GET /users
  def index
    @users = User.all

    render json: @users, include: :vehicles, status: :ok
  end

  # GET /users/1
  def show
    render json: @user.to_json(include: { vehicles: { include: :jobs } })
  end

  # POST /users
  def create
    @user = User.new(user_params)

    if @user.save
      @token = encode({user_id: @user.id, username: @user.username})
      render json: {user: @user, tokem: @token}, status: :created
    else
      render json: @user.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /users/1
  def update
    if @current_user.id == @user.id && @user.update(user_params)
      render json: @user
    else
      render json: @user.errors, status: :unprocessable_entity
    end
  end

  # DELETE /users/1
  def destroy
    @user.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_user
      @user = User.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def user_params
      params.require(:user).permit(:username, :email, :password, :first_name, :last_name, :address, :city, :state, :zip_code, :phone_number)
    end
end
