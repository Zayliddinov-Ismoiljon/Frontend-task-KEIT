import SimpleIndexPage from "../common/base_page"

const Role : React.FC = () : JSX.Element => {
  return(
    <>
      <SimpleIndexPage 
        title="Role" 
        url="/cost_types" 
        view_permession="cost_type/view" 
        update_permession="cost_type/update" 
        create_permession="cost_type/create" 
        delete_permession="cost_type/delete"
      />
    </>
  )
}

export default Role
